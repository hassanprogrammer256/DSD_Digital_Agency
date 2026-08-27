import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { LinkedinIcon, WhatsappIcon } from "@/components/common/SocialIcon";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { team } from "@/data/team";

export function TeamMemberDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const member = team.find((m) => m.slug === slug);
  useDocumentTitle(member ? member.name : "Our Team");

  if (!member) {
    return <Navigate to="/services#team" replace />;
  }

  return (
    <div className="bg-surface-secondary px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/services#team"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Team
        </Link>

        <div className="mt-8 text-center">
          <img
            src={member.photo}
            alt={member.name}
            className="mx-auto h-32 w-32 rounded-full object-cover"
          />
          <h1 className="mt-5 font-display text-3xl font-bold text-text-primary">
            {member.name}
          </h1>
          <p className="mt-1 text-base font-medium text-primary">{member.role}</p>

          <div className="mt-4 flex items-center justify-center gap-3">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                aria-label={`Email ${member.name}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-primary hover:text-primary"
              >
                <Mail size={16} />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-primary hover:text-primary"
              >
                <LinkedinIcon size={16} />
              </a>
            )}
            {member.phone && (
              <a
                href={`tel:${member.phone.replace(/\s+/g, "")}`}
                aria-label={`Call ${member.name}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-primary hover:text-primary"
              >
                <Phone size={16} />
              </a>
            )}
            {member.whatsapp && (
              <a
                href={`https://wa.me/${member.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Message ${member.name} on WhatsApp`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-primary hover:text-primary"
              >
                <WhatsappIcon size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-10 text-center leading-relaxed text-text-secondary">{member.fullBio}</p>
      </div>
    </div>
  );
}
