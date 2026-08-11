import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const projects = pgTable(
  "projects",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    category: text("category").notNull(),
    location: text("location").notNull(),
    tagline: text("tagline").notNull(),
    description: text("description").notNull(),
    status: text("status").notNull().default("Completed"),
    year: integer("year"),
    units: integer("units"),
    areaSqm: integer("area_sqm"),
    imageUrl: text("image_url").notNull(),
    gallery: text("gallery").array(),
    highlights: text("highlights").array(),
    featured: boolean("featured").notNull().default(false),
    position: integer("position").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [uniqueIndex("projects_slug_idx").on(table.slug)]
);

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  interest: text("interest").notNull().default("General enquiry"),
  message: text("message"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Project = typeof projects.$inferSelect;
export type Inquiry = typeof inquiries.$inferSelect;
