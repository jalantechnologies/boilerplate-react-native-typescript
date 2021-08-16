
import { APIServiceImpl, ServiceResponse } from '../api';

import { Order, OrderResponse } from '@models';
import { OrderService } from './order.service';

export default class OrderServiceImpl extends APIServiceImpl implements OrderService {
  static readonly RESOURCE = '/order';

  async postOrder(payload: {[key: string]: any}): Promise<ServiceResponse<Order>> {
    try {
      const response = await this.post(OrderServiceImpl.RESOURCE, payload);
      const order = new Order(response.data)
      return new ServiceResponse<Order>(order);
    } catch (e) {
      return new ServiceResponse<Order>(undefined, APIServiceImpl.parseError(e));
    }
  }

  async getOrders(payload: {page: number; perPage: number}): Promise<ServiceResponse<OrderResponse>> {
    try {
      const response = await this.get(`/order?page=${payload.page}&perPage=${payload.perPage}`);
      const orderResponse = new OrderResponse(response.data);
      return new ServiceResponse<OrderResponse>(orderResponse);
    } catch (e) {
      return new ServiceResponse<OrderResponse>(undefined, APIServiceImpl.parseError(e));
    }
  }

  async cancelOrder(payload: {orderId: string}): Promise<ServiceResponse<Order>> {
    try {
      const response = await this.put(`/order/cancel/${payload.orderId}`, {});
      return new ServiceResponse<Order>(response.data);
    } catch (e) {
      return new ServiceResponse<Order>(undefined, APIServiceImpl.parseError(e));
    }
  }

  async getOrderStatus(payload: {orderId: string}): Promise<ServiceResponse<Order>> {
    try {
      const response = await this.get(`/order/status?orderId=${payload.orderId}`);
      return new ServiceResponse<Order>(response.data);
    } catch (e) {
      return new ServiceResponse<Order>(undefined, APIServiceImpl.parseError(e));
    }
  }

  async getBankConnectionStatus(): Promise<ServiceResponse<{isConnected: boolean}>> {
    try {
      const response = await this.get(`/order/connection_status`);
      localStorage.setItem('isBankConnected', response.data.isConnected);
      return new ServiceResponse<{isConnected: boolean}>(response.data);
    } catch (e) {
      return new ServiceResponse<{isConnected: boolean}>(undefined, APIServiceImpl.parseError(e));
    }
  }
}
