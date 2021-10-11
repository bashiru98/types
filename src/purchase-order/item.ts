export interface PurchaseOrderItem {
  accountId: string;
  description: string;
  discount?: number;
  discountAmount?: number;
  externalId?: string;
  id: string;
  images: string[];
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
}
