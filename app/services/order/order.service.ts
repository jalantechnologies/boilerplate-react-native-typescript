import {ServiceResponse} from "../api";
import { Order, OrderResponse} from "@models";

export interface OrderService {
  postOrder: (payload: {[key: string]: any}) => Promise<ServiceResponse<Order>>;
  getOrders: (payload: {page: number; perPage: number}) => Promise<ServiceResponse<OrderResponse>>;
  cancelOrder: (payload: {orderId: string}) => Promise<ServiceResponse<Order>>;
  getOrderStatus: (payload: {orderId: string}) => Promise<ServiceResponse<Order>>;
  getBankConnectionStatus: () => Promise<ServiceResponse<{isConnected: boolean}>>;
}
