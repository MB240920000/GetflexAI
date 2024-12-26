import type { CostInputData, SavingsData } from '../types/calculator';

export function calculateSavings(costs: CostInputData): SavingsData {
  // Calculate staff cost reduction (assume 60% reduction in staff needs)
  const staffCostSavings = costs.customerServiceStaff * costs.avgSalary * 0.6;

  // Calculate efficiency savings from faster response times
  const timeEfficiencySavings = 
    (costs.monthlyCustomers * (costs.avgResponseTime / 60) * 25) * 12; // $25/hour value of time

  // Calculate additional revenue from improved lead capture (assume $500 avg customer value)
  const improvedLeadRevenue = costs.missedLeads * 0.7 * 500 * 12; // Capture 70% of missed leads

  return {
    annualSavings: Math.round(staffCostSavings + timeEfficiencySavings + improvedLeadRevenue),
    responseTimeImprovement: 90, // 90% improvement in response time
    leadCapture: 70 // 70% improvement in lead capture
  };
}