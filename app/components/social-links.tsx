const socialLinks = [
  {
    label: "Instagram",
    ariaLabel: "Eiscafé Surprise auf Instagram öffnen",
    href: "https://www.instagram.com/eiscafe_surprise/",
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    ariaLabel: "Eiscafé Surprise auf Facebook öffnen",
    href: "https://www.facebook.com/EiscafeSurprise/",
    Icon: FacebookIcon,
  }
];

type SocialLinksProps = {
  className?: string;
  iconOnly?: boolean;
  linkClassName?: string;
};

export function SocialLinks({
  className,
  iconOnly = false,
  linkClassName,
}: SocialLinksProps) {
  return (
    <nav className={className} aria-label="Social Media und Bewertungen">
      {socialLinks.map(({ label, ariaLabel, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={ariaLabel}
          title={iconOnly ? label : undefined}
          className={linkClassName}
        >
          <Icon aria-hidden="true" className="size-5" />
          {!iconOnly && <span>{label}</span>}
        </a>
      ))}
    </nav>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect width="16" height="16" x="4" y="4" rx="4" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.25" strokeWidth="2" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 8.5V7.2c0-.7.5-1.2 1.2-1.2H17V3h-2.5C11.8 3 10 4.8 10 7.4v1.1H7.5V12H10v9h3.8v-9h2.7l.5-3.5z" />
    </svg>
  );
}
