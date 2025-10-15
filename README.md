# 🌟 Frontend Take-Home Assignment

Hey there! 👋  
Thanks for your interest in joining our team!  
This short assignment will help us understand your approach to building **responsive**, **well-structured**, and **maintainable** UIs using modern frontend tools.

---

## 🧰 Tech Stack

Please use the following technologies:

- **HTML, CSS, JavaScript / TypeScript**
- **React** (with hooks and functional components — you may use any React framework you prefer)
- **Tailwind CSS** (preferred)
- **React Testing Library** for testing

---

## 🧑‍💻 Project Overview — Star Wars Character App

Build a simple **responsive web application** that displays a list of Star Wars characters using the [Star Wars API (SWAPI)](https://swapi.dev/).

**Goal:** Assess your skills in **UI development**, **API integration**, and **state management**.

---

## 🎯 Core Requirements

### 1. Fetch & Display Characters
- Use the `/people` endpoint to list Star Wars characters.
- Implement **pagination** (since the API is paginated).
- Include **loading** and **error handling** states (e.g., when the API fails).

### 2. Character Cards
- Show each character’s **name** and a **random image** (you can use [Picsum Photos](https://picsum.photos/) or similar).
- Each card should have a distinct **background or accent color** based on **species**.
- Clicking on a card should open a **modal** or **expanded section** showing more details.

### 3. Character Details
In the modal/expanded view, display the following:

- **Name** (as header)
- **Height** (in meters)
- **Mass** (in kg)
- **Date added** (formatted as `dd-MM-yyyy`)
- **Number of films** the person appears in
- **Birth year**
- **Homeworld details:** name, terrain, climate, and population

### 4. Responsiveness
- The UI should look clean and work seamlessly on **mobile**, **tablet**, and **desktop** screen sizes.

---

## ⚙️ Bonus (Optional but Appreciated)

- **Search:** Allow searching by character name (partial match).
- **Filters:** Filter by **homeworld**, **film**, or **species**.
- **Combined Search + Filter:** Support combined filtering and searching.
- **Mock Authentication:**
  - Implement a **simple login/logout** using fake credentials and a mocked **JWT token**.
  - Support **silent token refresh** logic (mocked; no real backend needed).
- **Testing:** Add an **integration test** verifying that the modal opens with the correct character details.

---

## 🧾 Development Guidelines

- Use **React functional components** and **hooks**.
- Keep components **small, modular, and reusable**.
- Type your props clearly (with JavaScript or TypeScript).
- Maintain a **clean folder structure** and **meaningful variable names**.
- Handle **loading**, **empty**, and **error** states gracefully.
- Submit within **3 days** of receiving the task (plus 1 day if received after **3 PM IST**).

---

## Submission Instructions

1. Create a **public GitHub repository** for your solution.  
2. Include a short **README** that explains:
   - How to run the project  
   - What you implemented (and any bonus features)  
   - Any trade-offs or design choices you made  
3. Send us your **GitHub repository link** once you’ve completed the assignment.

---

If you encounter any issues, please reach out to **HR** for assistance.  
Good luck, and may the force be with you! 
