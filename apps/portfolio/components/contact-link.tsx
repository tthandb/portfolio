function ContactLink() {
return (
  <div className="links mt-10 flex items-center gap-6">
    <a
      className="hover:scale-110 cursor-pointer"
      href="https://github.com/tthandb"
      referrerPolicy="no-referrer"
      rel="noopener" target="_blank"
    >
      <svg
        fill="none"
        height={35}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        width={35}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
      <div className="sr-only">Github</div>
    </a>
    <a
      className="hover:scale-110 cursor-pointer"
      href="https://linkedin.com/in/tthandb"
      referrerPolicy="no-referrer"
      rel="noopener" target="_blank"
    >
      <svg
        className="lucide lucide-linkedin "
        fill="none"
        height={35}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        width={35}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect height={12} width={4} x={2} y={9} />
        <circle cx={4} cy={4} r={2} />
      </svg>
      <div className="sr-only">Linkedin</div>
    </a>
    <a
      className="hover:scale-110 cursor-pointer"
      href="https://www.instagram.com/tthandb"
      referrerPolicy="no-referrer"
      rel="noopener" target="_blank"
    >
      <svg
        fill="none"
        height={35}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        width={35}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect height={20} rx={5} ry={5} width={20} x={2} y={2} />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
      <div className="sr-only">Instagram</div>
    </a>
    <a
      className="hover:scale-110 cursor-pointer"
      href="mailto:tthandb@gmail.com"
      referrerPolicy="no-referrer"
      rel="noopener" target="_blank"
    >
      <svg
        className="lucide lucide-mail "
        fill="none"
        height={35}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        width={35}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect height={16} rx={2} width={20} x={2} y={4} />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
      <div className="sr-only">Email</div>
    </a>
  </div>
)
}
export default ContactLink