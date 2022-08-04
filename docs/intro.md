---
sidebar_position: 1
---

# Introduction

Let's discover **Eventor in less than 5 minutes**.

## Getting Started

Get started by **reading what it actually is?**.

Or **try eventor immediately** with **[eventor.rtdevopsify.com](https://eventor.rtdevopsify.com)**.

### What it actually is?

**Eventor** is an attendance tracking app that enables attendees to check in and out of an event by scanning their QR codes through event volunteers. The timestamps of check-in and out help the event manager mark the attendee present. Only the event manager is authorized to give attendance and sole purpose of QR code scanner is to check in and out member. 

## Problem
### What problem is this solving?

This eliminates the need of an **Attendance chaperon** and removes a lot of the other manual work that typically comes with **attendance tracking**.

# Our Approach

We have assigned three roles for the app namely member, verifier, and admin.

### Admin Role Privileges
1. Can create, read, update, and delete group and event, Deletion can only takes place before commencement. This preserves the attendance record being deleted accidentally. Event details include:-

- Date of commencement  
- Start Time
- End Time
- Location
- Title
- Description
- Verifier ID
- Member ID list

2. Can give attendance.

### Member Role Privileges

1. Can receive event invitations. Invitations may include info such as:- 

- Date of commencement
- Start Time
- End Time
- Attendance status
- Location
- Checked In Timestamp
- Checked Out Timestamp
- Title 
- Description
- Also, a unique QR code is generated for each and every member based on check in and out will takes place.

### Verifier Role Privileges

1. Can check in and out the member invited in the event, to mark the attendance of the members.
2. Only a verifier’s can perform check in and out process.

# System features :

-  Add/Delete users to the underlying database (PostgreSQL in this case), in bulk or individually

-  Generate QR-codes using the SAP-ID (as username) , and other member info

-  Ability to email the QR-code to each campus member, respectively

-  Ability to manage user accounts who can be students, staff, or admin

-  Preferably Single sign-on for admins; password reset capability; Permissions management 

-  Checking in/out using the attached camera for QR-code scan

-  Show person's photo/name/identity on screen when a valid QR-code is read

-  Can run on a low-cost edge device (Android mobile & Tablet, PC with i3 CPU, etc.)

-  Generate reports of attendance and analytics

-  Configuration to store Event/Location/Time info and ability to add rules such as onetime-checkin-only any security features, minimum-time-before-checkout, etc.

### App Flow
**[App Flow Artboard](https://whimsical.com/eventor-attendance-taking-app-A3egZwmc7AY65QLE2ecexk@2bsEvpTYFZsxPSBXTTxYy7ymEMBf3WkH7ie)**

### Authorization Flow
**[Authorization Flow Artboard](https://whimsical.com/login-flow-UWdk7aTP1HgfkYWYPqHYiZ@2Ux7TurymN4vZ4Jhft4V)**

### App Architecture
**[App Architecture Artboard](https://whimsical.com/app-architecture-6WHqQzTMFq1nZx4L4ahyFR@2Ux7TurymNHvRPXVCa9C)**

