import { Link } from "react-router-dom";
import type { TeamMember } from "@/types";

type Props = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: Props) {
  return (
    <Link
      to={`/team/${member.slug}`}
      className="flex w-64 shrink-0 snap-start flex-col rounded-xl border border-border bg-surface p-5 text-center transition-transform duration-200 hover:-translate-y-1 md:w-72"
    >
      <img
        src={member.photo}
        alt={member.name}
        className="mx-auto h-24 w-24 rounded-full object-cover"
      />
      <h3 className="mt-4 font-display text-base font-semibold text-text-primary">
        {member.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
      <p className="mt-3 line-clamp-3 text-sm text-text-secondary">{member.bio}</p>
    </Link>
  );
}
