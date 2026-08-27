import { StatCounter } from "@/components/common/StatCounter";
import { stats } from "@/data/stats";

export function StatsStrip() {
  return (
    <section className="bg-navy px-4 py-14 md:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4 md:divide-x md:divide-white/14">
        {stats.map((stat) => (
          <div key={stat.id} className="md:px-4">
            <StatCounter {...stat} />
          </div>
        ))}
      </div>
    </section>
  );
}
