/**
 * MP Coupon
 *
 * @export
 * @interface Coupon
 */
export interface Coupon {
  appliedMemberships: string[];
  auto: boolean;
  campaignName: string;
  code: string;
  discount: {
    type: "%" | "$";
    value: number;
  };
  endDate: Date;
  maxUses: number;
  metadata?: {
    stripeCouponId: string;
  };
  minAppliedAmount: number;
  shipping: {
    type: "%" | "$";
    value: number;
  };
  startDate: Date;
  tax: {
    type: "%" | "$";
    value: number;
  };
  total: {
    type: "%" | "$";
    value: number;
  };
  type: "salesorder" | "subscription";
  useCount: number;
}
