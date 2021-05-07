export interface PurchaseOrderItem {
  accountId: string;
  description: string;
  discount?: number;
  discountAmount?: number;
  id: string;
  lineItemId: string;
  name: string;
  quantity: number;
  quantityCancelled: number;
  quantityReceived: number;
  rate: number;
  sku: string;
  taxId: string;
  taxName: string;
  taxPercentage: number;
  taxType: string;
  total: number;
  warehouseId: string;
}
