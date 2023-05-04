import theme from 'styles/theme';

export const SubjectIcon = () => {
  return (
    <svg
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 96 96"
      fill="url(#gradient)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: `${theme.colors.primary}`, stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: `${theme.colors.secondary}`, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path d="M60 82.2857H0V96H60V82.2857ZM96 27.4286H0V41.1429H96V27.4286ZM0 68.5714H96V54.8571H0V68.5714ZM0 0V13.7143H96V0H0Z" />
    </svg>
  );
};

export const EmailIcon = () => {
  return (
    <svg
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 96 96"
      fill="url(#gradient)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: `${theme.colors.primary}`, stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: `${theme.colors.secondary}`, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path d="M48 0C21.504 0 0 21.504 0 48C0 74.496 21.504 96 48 96H72V86.4H48C27.168 86.4 9.6 68.832 9.6 48C9.6 27.168 27.168 9.6 48 9.6C68.832 9.6 86.4 27.168 86.4 48V54.864C86.4 58.656 82.992 62.4 79.2 62.4C75.408 62.4 72 58.656 72 54.864V48C72 34.752 61.248 24 48 24C34.752 24 24 34.752 24 48C24 61.248 34.752 72 48 72C54.624 72 60.672 69.312 64.992 64.944C68.112 69.216 73.488 72 79.2 72C88.656 72 96 64.32 96 54.864V48C96 21.504 74.496 0 48 0ZM48 62.4C40.032 62.4 33.6 55.968 33.6 48C33.6 40.032 40.032 33.6 48 33.6C55.968 33.6 62.4 40.032 62.4 48C62.4 55.968 55.968 62.4 48 62.4Z" />
    </svg>
  );
};

export const NameIcon = () => {
  return (
    <svg
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 96 96"
      fill="url(#gradient)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: `${theme.colors.primary}`, stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: `${theme.colors.secondary}`, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path d="M48 11.4C54.96 11.4 60.6 17.04 60.6 24C60.6 30.96 54.96 36.6 48 36.6C41.04 36.6 35.4 30.96 35.4 24C35.4 17.04 41.04 11.4 48 11.4ZM48 65.4C65.82 65.4 84.6 74.16 84.6 78V84.6H11.4V78C11.4 74.16 30.18 65.4 48 65.4ZM48 0C34.74 0 24 10.74 24 24C24 37.26 34.74 48 48 48C61.26 48 72 37.26 72 24C72 10.74 61.26 0 48 0ZM48 54C31.98 54 0 62.04 0 78V96H96V78C96 62.04 64.02 54 48 54Z" />
    </svg>
  );
};
