import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

type RecordData = {
  name: string;
  highScore?: number;
  avgScore?: number;
  avgResponseTime?: number;
};

interface LeaderboardTableProps {
  leaderboardData: RecordData[];
  type: string;
}

export default function LeaderboardTable({
  leaderboardData,
  type,
}: LeaderboardTableProps) {
  console.log(leaderboardData);

  return (
    <div className="flex flex-col items-center justify-center py-3 gap-y-5">
      <Table className="border-b border-t">
        <TableBody className="w-full">
          {leaderboardData.map((leaderboardRecord, index) => (
            <TableRow className="w-[400px]" key={leaderboardRecord.name}>
              <TableCell className="font-medium gap-x-2 flex flex-row">
                <p className="px-0.5">{index + 1}.</p>
                <p className="px-0.5">{leaderboardRecord.name}</p>
              </TableCell>
              <TableCell className="font-medium text-right px-8">
                {type === "highest-score"
                  ? leaderboardRecord.highScore
                  : type === "avg-score"
                  ? leaderboardRecord.avgScore
                  : leaderboardRecord.avgResponseTime + "s"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
