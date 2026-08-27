import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { FormControl, FormHelperText, FormLabel, Input, Textarea } from "@mui/joy";
import { Mail, MapPin, Phone } from "lucide-react";
import { CtaButton } from "@/components/common/CtaButton";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { sendContactMessage } from "@/lib/email";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { contactSchema, type ContactFormValues } from "@/lib/validation/contactSchema";
import contactPhoto from "@/assets/contact1.png";
import contactBanner from "@/assets/images/hero/home_hero_bg.png";

export function ContactPage() {
  useDocumentTitle("Contact");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactFormValues) {
    try {
      await sendContactMessage(values);
      toast.success("Message sent — DSD will get back to you shortly.");
      reset();
    } catch (err) {
      console.error("[ContactPage/onSubmit]", err);
      toast.error("Couldn't send your message — please try again or email info@dsdgrp.com directly.");
    }
  }

  return (
    <>
      <PageHeroBanner
        image={contactBanner}
        imagePosition="60% 25%"
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Tell us what you're building — we'll get back to you within one business day."
      />

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
            <FormControl error={!!errors.name} required>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="Your name" {...register("name")} />
              {errors.name && <FormHelperText>{errors.name.message}</FormHelperText>}
            </FormControl>

            <FormControl error={!!errors.email} required>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="you@company.com" {...register("email")} />
              {errors.email && <FormHelperText>{errors.email.message}</FormHelperText>}
            </FormControl>

            <FormControl error={!!errors.subject} required>
              <FormLabel>Subject</FormLabel>
              <Input placeholder="What's this about?" {...register("subject")} />
              {errors.subject && <FormHelperText>{errors.subject.message}</FormHelperText>}
            </FormControl>

            <FormControl error={!!errors.message} required>
              <FormLabel>Message</FormLabel>
              <Textarea minRows={5} placeholder="Tell us about your project..." {...register("message")} />
              {errors.message && <FormHelperText>{errors.message.message}</FormHelperText>}
            </FormControl>

            <CtaButton type="submit" loading={isSubmitting} disabled={isSubmitting} className="mt-2">
              Send Message
            </CtaButton>
          </form>

          <div className="overflow-hidden rounded-xl border border-border bg-surface-secondary">
            <img
              src={contactPhoto}
              alt="Two people shaking hands after agreeing on a project"
              className="h-44 w-full object-cover"
            />
            <div className="p-6 md:p-8">
              <h2 className="font-display text-lg font-semibold text-text-primary">Our Office</h2>
              <ul className="mt-6 flex flex-col gap-5">
                <li className="flex items-start gap-3 text-text-secondary">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                  Office No. 1, 1st Floor, Al Hareb Building, Umm Hurair Road, Oud Metha, P.O. Box
                  181040, Dubai, United Arab Emirates
                </li>
                <li>
                  <a
                    href="tel:+917585889093"
                    className="flex items-center gap-3 font-mono text-text-secondary transition-colors hover:text-primary"
                  >
                    <Phone size={18} className="shrink-0 text-primary" />
                    +91 7585889093
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@dsdgrp.com"
                    className="flex items-center gap-3 text-text-secondary transition-colors hover:text-primary"
                  >
                    <Mail size={18} className="shrink-0 text-primary" />
                    info@dsdgrp.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
