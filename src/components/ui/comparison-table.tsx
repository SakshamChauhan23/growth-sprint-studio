import { Check, X } from "lucide-react";

interface ComparisonItem {
  feature: string;
  description?: string;
  agencies: boolean | { checked: boolean; note: string };
  saksham: boolean | { checked: boolean; note: string };
  consultants: boolean | { checked: boolean; note: string };
}

interface ComparisonTableProps {
  data: ComparisonItem[];
}

const ComparisonTable = ({ data }: ComparisonTableProps) => {
  const renderCell = (value: boolean | { checked: boolean; note: string }) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-4 w-4 lg:h-6 lg:w-6 text-primary mx-auto" />
      ) : (
        <X className="h-4 w-4 lg:h-6 lg:w-6 text-destructive mx-auto" />
      );
    }
    
    return (
      <div className="flex flex-col items-center">
        {value.checked ? (
          <Check className="h-4 w-4 lg:h-6 lg:w-6 text-primary mb-1" />
        ) : (
          <X className="h-4 w-4 lg:h-6 lg:w-6 text-destructive mb-1" />
        )}
        <span className="text-xs text-muted-foreground lg:text-sm">{value.note}</span>
      </div>
    );
  };

  const renderSakshamCell = (value: boolean | { checked: boolean; note: string }) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-4 w-4 lg:h-6 lg:w-6 text-primary mx-auto" />
      ) : (
        <X className="h-4 w-4 lg:h-6 lg:w-6 text-destructive mx-auto" />
      );
    }
    
    return (
      <div className="flex flex-col items-center">
        {value.checked ? (
          <Check className="h-4 w-4 lg:h-6 lg:w-6 text-primary mb-1" />
        ) : (
          <X className="h-4 w-4 lg:h-6 lg:w-6 text-destructive mb-1" />
        )}
        <span className="text-xs text-secondary font-medium lg:text-sm">{value.note}</span>
      </div>
    );
  };

  return (
    <div className="bg-card rounded-2xl lg:rounded-3xl p-4 lg:p-8 shadow-lg lg:shadow-2xl overflow-x-auto">
      <table className="w-full min-w-[600px] lg:min-w-0">
        <thead>
          <tr className="border-b border-border lg:border-gray-200">
            <th className="text-left p-3 lg:p-6 text-foreground font-semibold text-sm lg:text-lg">Feature</th>
            <th className="text-center p-3 lg:p-6 text-muted-foreground font-medium text-sm lg:text-base">Agencies</th>
            <th className="text-center p-3 lg:p-6 text-secondary font-semibold bg-secondary/10 lg:bg-orange-50 rounded-t-lg text-sm lg:text-base">Me (Saksham)</th>
            <th className="text-center p-3 lg:p-6 text-muted-foreground font-medium text-sm lg:text-base">Consultants</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={`border-b border-border/50 lg:border-gray-100 ${index === data.length - 1 ? 'border-b-0' : ''}`}>
              <td className="p-3 lg:p-6 text-foreground font-medium">
                <div className="text-sm lg:text-base">{item.feature}</div>
                {item.description && (
                  <div className="text-xs lg:text-sm text-muted-foreground mt-1 hidden lg:block">{item.description}</div>
                )}
              </td>
              <td className="p-3 lg:p-6 text-center">
                {renderCell(item.agencies)}
              </td>
              <td className={`p-3 lg:p-6 text-center bg-secondary/10 lg:bg-orange-50 ${index === data.length - 1 ? 'rounded-b-lg' : ''}`}>
                {renderSakshamCell(item.saksham)}
              </td>
              <td className="p-3 lg:p-6 text-center">
                {renderCell(item.consultants)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;