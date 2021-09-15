/**
 * MP Coupon
 *
 * @export
 * @interface Coupon
 * @template T
 */
export interface Coupon<T = { [key: string]: string | number }> {
  appliedMemberships: string[];
  auto: boolean;
  campaignName: string;
  code: string;
  createdAt: Date;
  discount: {
    shipping: Discount;
    tax: Discount;
    total: Discount;
  };
  endDate: Date;
  id?: string;
  maxUses: number;
  metadata?: T;
  minAppliedAmount: number;
  startDate: Date;
  totalAmount?: number;
  type: "salesorder" | "subscription";
  updatedAt: Date;
  useCount: number;
  zone: string;
}

interface Discount {
  type: 'currency' | '%';
  value: number;
}