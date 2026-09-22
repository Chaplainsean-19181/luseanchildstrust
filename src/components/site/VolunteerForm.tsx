import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactStatus, volunteerFormNotice, volunteerInterestAreas } from "@/content/site";

const schema = z.object({
  fullName: z.string().trim().nonempty({ message: "Please enter your full name" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  phone: z.string().trim().max(40).optional(),
  country: z.string().trim().nonempty({ message: "Please enter your country" }).max(80),
  city: z.string().trim().max(80).optional(),
  interest: z.string().trim().nonempty({ message: "Please choose an area of interest" }),
  skills: z.string().trim().max(1000).optional(),
  motivation: z.string().trim().max(1000).optional(),
  availability: z.string().trim().max(300).optional(),
  scope: z.string().trim().max(60).optional(),
});

const fieldClass = "mt-2";

export function VolunteerForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [prepared, setPrepared] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setPrepared(null);
      return;
    }

    setErrors({});
    const v = result.data;
    const body = [
      `Full Name: ${v.fullName}`,
      `Email: ${v.email}`,
      `Phone / WhatsApp: ${v.phone || "-"}`,
      `Country: ${v.country}`,
      `City / Location: ${v.city || "-"}`,
      `Area of Interest: ${v.interest}`,
      `Local or International Interest: ${v.scope || "-"}`,
      `Availability: ${v.availability || "-"}`,
      "",
      "Professional Skills / Experience:",
      v.skills || "-",
      "",
      "Why would you like to volunteer with Lusean?",
      v.motivation || "-",
    ].join("\n");

    const mailto = `mailto:${contactStatus.email}?subject=${encodeURIComponent(
      "Volunteer Interest — Lusean Child's Trust Foundation",
    )}&body=${encodeURIComponent(body)}`;

    setPrepared(mailto);
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" autoComplete="name" className={fieldClass} />
          <FieldError message={errors["fullName"]} />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" autoComplete="email" className={fieldClass} />
          <FieldError message={errors["email"]} />
        </div>
        <div>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" name="phone" autoComplete="tel" className={fieldClass} />
          <FieldError message={errors["phone"]} />
        </div>
        <div>
          <Label htmlFor="country">Country</Label>
          <Input id="country" name="country" autoComplete="country-name" className={fieldClass} />
          <FieldError message={errors["country"]} />
        </div>
        <div>
          <Label htmlFor="city">City / Location</Label>
          <Input id="city" name="city" className={fieldClass} />
        </div>
        <div>
          <Label htmlFor="interest">Area of Interest</Label>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <option value="">Select an area</option>
            {volunteerInterestAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          <FieldError message={errors["interest"]} />
        </div>
        <div>
          <Label htmlFor="availability">Availability</Label>
          <Input
            id="availability"
            name="availability"
            placeholder="e.g. weekends, school holidays"
            className={fieldClass}
          />
        </div>
        <div>
          <Label htmlFor="scope">Local or International Interest</Label>
          <select
            id="scope"
            name="scope"
            defaultValue=""
            className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <option value="">Select</option>
            <option value="Local (Zambia)">Local (Zambia)</option>
            <option value="International">International</option>
            <option value="Either">Either</option>
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="skills">Professional Skills / Experience</Label>
        <Textarea id="skills" name="skills" rows={3} maxLength={1000} className={fieldClass} />
      </div>
      <div>
        <Label htmlFor="motivation">Why would you like to volunteer with Lusean?</Label>
        <Textarea
          id="motivation"
          name="motivation"
          rows={4}
          maxLength={1000}
          className={fieldClass}
        />
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {volunteerFormNotice} See our{" "}
        <Link to="/privacy" className="font-semibold text-primary underline underline-offset-4">
          Privacy Policy
        </Link>
        .
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" variant="hero" size="lg">
          Send volunteer interest
        </Button>
        <a
          href={`mailto:${contactStatus.email}`}
          className="text-sm font-semibold text-primary underline underline-offset-4"
        >
          {contactStatus.email}
        </a>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        This website does not yet have an online form-delivery system. Your details are prepared as
        an email to the Foundation, which opens in your email application so you can review and send
        it. If your device does not open an email application, please write directly to{" "}
        <a
          href={`mailto:${contactStatus.email}`}
          className="font-semibold text-primary underline underline-offset-4"
        >
          {contactStatus.email}
        </a>
        .
      </p>

      {prepared ? (
        <p role="status" className="text-sm font-semibold text-primary">
          Your email has been prepared — please review and send it from your email application. Your
          interest is only received once that email reaches the Foundation.
        </p>
      ) : null}
    </form>
  );
}

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return <p className="mt-1.5 text-sm text-destructive">{message}</p>;
}
