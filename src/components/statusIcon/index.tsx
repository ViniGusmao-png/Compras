import { FilterStatus } from "@/types/FilterStatus";
import { CircleCheck, CircleDashed } from "lucide-react-native";

export function StatusIcon({ status }: { status: FilterStatus }) {
  return status === FilterStatus.DONE ? (
    <CircleCheck size={16} color="#e86304" />
  ) : (
    <CircleDashed size={16} color="#1b04e8" />
  );
}
