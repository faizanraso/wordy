import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

type RecordData = {
  user: string;
  record: number;
};

interface LeaderboardTableProps {
  leaderboardData: RecordData[];
}

export default function LeaderboardTable({
  leaderboardData,
}: LeaderboardTableProps) {
  return (
    <Table>
      <TableBody>
        {leaderboardData.map((leaderboardRecord) => (
          <TableRow>
            <TableCell className="font-medium">
              {leaderboardRecord.user}
            </TableCell>
            <TableCell className="font-medium text-right px-3">
              {leaderboardRecord.record}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
