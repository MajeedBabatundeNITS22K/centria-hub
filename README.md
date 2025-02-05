## Getting Started

First, run the development server:

```bash
yarn
yarn dev
```

# We are now online!
link: https://hub.solo-web.studio/

# Centria Hub Project - Technical Requirements

## 1. Home Page

- **Hero Section**: A welcoming section with a brief introduction about Centria Hub.
- **Recent News Section**: Display 3-4 latest news articles with a "More News" button linking to the news page.
- **Recent Events Section**: Display 3-4 latest events with a "See More" button linking to the events page.
- **Recent Articles Section**: Display 3-4 latest articles with a "See More" button linking to the articles page.

## 2. News Page

- **Layout**: Display news in a card format containing:
  - Image
  - Title
  - Publication Date
  - "Read More" button
  - Category
- **Filters**: Provide filters for sorting news by:
  - Publication Date
  - Category

## 3. Events Page

- **Layout**: Display events in a card format containing:
  - Image
  - Title
  - Publication Date
  - "Read More" button
  - Category
- **Filters**: Provide filters for sorting events by:
  - Publication Date
  - Category

## 4. Articles Page

- **Layout**: Display articles in a long card format with one article per row, containing:
  - Title
  - Publication Date
  - Short Description
  - "Read More" button
  - Category
- **Filters**: Provide filters for sorting articles by:
  - Publication Date
  - Category

## 5. About the Project Page

- **Description**: This page will describe the project's objective and goals.

## 6. Navigation

- **Elements**:
  - Logo
  - Links to all the above pages (Home, News, Events, Articles, About)
  - "Login" and "Register" buttons

## 7. Admin Panel

- **Categories Management**: Admin can create categories for news, events, and articles with the required fields (title, description, etc.).
- **User Management**: Admin can approve or reject user registrations and assign roles.
- **Article Approval**: Admin can approve articles before publication.
- **Role Management**: Admin can modify user roles:
  - **Admin**: Full access to manage all resources and users, approve articles, and user registrations.
  - **Moderator**: Can manage user content and moderate posts.
  - **Editor**: Can create and publish content without admin approval.

## 8. Roles and Permissions

- **Admin**: Full access to manage content, approve registrations, approve articles, and edit all resources.
- **Moderator**: Can moderate user content, edit, and approve articles.
- **Editor**: Can create articles and events but requires admin approval before publishing.

## Additional Features

- **Search Functionality**: Implement search across news, events, and articles.
- **Responsive Design**: Ensure the platform is mobile-friendly.
- **Notifications**: Users should receive notifications for new events, articles, and updates.

---

# Design Instructions for Figma

## 1. Home Page Design

- **Hero Section**: Should include an eye-catching image or banner, with a welcoming text.
- **News, Events, Articles**: Each section should have cards with a thumbnail image, title, and publication date. Design the buttons ("More News," "See More," "Read More") to be easily distinguishable.

## 2. Content Pages (News, Events, Articles)

- Design the card layouts for each content type.
  - **Cards**: Should have a uniform style with an image on top, followed by the title, publication date, and category. A "Read More" button should be included.
  - **Filters**: Display filters clearly above the content list.

## 3. Admin Panel

- Design clear sections for:
  - **User Management**: A list of users with a button to approve or reject their registration.
  - **Content Management**: A section to approve or edit content (articles, events, etc.).
  - **Roles Management**: A list of users and their roles, with the ability to change roles.

## 4. General Design

- **Color Scheme**: Ensure that the design aligns with the university's branding.
- **Typography**: Use a clean and modern font for readability.
- **Buttons and Links**: Make sure all buttons are visually distinct and easy to interact with.

---

# Clarifications and Suggestions

- Consider implementing a notification system to inform users of new content, events, and announcements.
- The project could benefit from a search bar on the homepage and content pages to enhance usability.
- Accessibility features, such as color contrast and keyboard navigation, should be prioritized for inclusivity.
