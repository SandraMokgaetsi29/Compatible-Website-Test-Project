/* ==========================================================================
   Upcoming training sessions and webinars
   --------------------------------------------------------------------------
   HOW TO ADD A SESSION
   Copy one of the blocks below (from { to },), paste it into the list and
   change the details. Save the file and the training page updates.

   department : "DMS", "CRM", "Digital" or "Technical"
   type       : "Training" or "Webinar"
   title      : name of the session
   date       : "YYYY-MM-DD"  (sessions in the past are hidden automatically)
   time       : e.g. "10:00 - 11:30"
   format     : e.g. "Online", "On-site", "Compatible offices, Woodmead"
   host       : who is presenting (optional)
   spots      : places available (optional, leave out if unlimited)
   description: one or two sentences about what attendees will learn

   The sessions below are EXAMPLES. Replace them with real sessions.
   ========================================================================== */
window.TRAINING_SESSIONS = [
  {
    department: "DMS",
    type: "Training",
    title: "Example: Getting started with deal files",
    date: "2026-11-05",
    time: "10:00 - 11:30",
    format: "Online",
    host: "DMS team",
    spots: 12,
    description: "A walkthrough of creating, tracking and signing off deal files from offer to handover."
  },
  {
    department: "CRM",
    type: "Webinar",
    title: "Example: Managing leads from every channel",
    date: "2026-11-12",
    time: "14:00 - 15:00",
    format: "Online",
    host: "CRM team",
    description: "How to capture, assign and follow up leads so no enquiry slips through the cracks."
  },
  {
    department: "Digital",
    type: "Webinar",
    title: "Example: Getting more from your dealer website",
    date: "2026-11-19",
    time: "11:00 - 12:00",
    format: "Online",
    host: "Digital team",
    description: "Tips on stock presentation, SEO and turning website visitors into enquiries."
  },
  {
    department: "Technical",
    type: "Training",
    title: "Example: Integrations and data flows",
    date: "2026-11-26",
    time: "09:30 - 11:00",
    format: "Compatible offices, Woodmead",
    host: "Technical team",
    spots: 8,
    description: "An overview of connecting your systems, with time for questions on your own set-up."
  }
];
