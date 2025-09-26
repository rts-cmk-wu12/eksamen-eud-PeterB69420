# Opgavetitel
SwapHub

Navn: Peter Oliver Neumann Bransner

Hold: WU12

Valgfri opgave: C - Opret Bruger

## Sådan kommer du i gang
API
`cd api`
`npm install`
`npm start`

Projekt
`cd projekt`
`npm install`
`npm run dev`

## Tech-stack
* **Next.js**
Er et react framework for at bygge web applikationer. Next.js er godt for yderligere funktioner og optimering af components. Det giver også adgang til mappebaseret routing. Next.js er godt til at bygge interaktive, dynamiske og hurtige React-applikationer. Jeg bruger Next.js fordi at det tilbyder automatisk codesplitting, server-side rendering og meget mere.

* **React**
Er et front-end framework bibliotek, som har til formål at bygge user interfaces baseret på components. React har et stort community og modul-bibliotek, som er vel-dokumenteret og aktivt. React er bl. a. det mest brugte front-end bibliotek i verden, derfor er efterspørgslen på react udvikler stor.

* **SASS**
Er en udvidelse af CSS, som giver mulighed for variabler, mixins og nesting. SASS forbedrer kodeorganisering og genbrugelighed. Det giver også mulighed for bedre struktur via import. Jeg bruger SASS fordi at jeg godt kan lide at neste min styling så det er mere overskueligt og pænere.

* **React-icons**
Er et bibliotek der lader dig bruge SVG ikoner i dine projekter. Ikonerne fylder ingenting og er nemme at benytte og style. Man undgår at downloade billeder som man så skal konvertere til SVG format. 

* **Zod**
Er et valideringsbibliotek. Zod kan bruges til at definerer schemas som du kan bruge til validering af data. Jeg bruger Zod til validering af bruger input i formularer, bl.a. i min login action og create user action.

* **React-spinners**
Er et bibliotek, hvor man kan finde animerede loading indicators. Jeg bruger react-spinners på min form, så efter man har trykket submit, vises en loading indicator.

## Kodeeksempel

Header component (@/components/ui/header)

```jsx
export default function Header() {
    const pathname = usePathname();
    const isActive = (href) => {
        if (href === "/") {
            return pathname === "/" || pathname.startsWith("/listings") || pathname === "/login" || pathname === "/register";
        }
        return pathname.startsWith(href);
    }

    return (
        <header className="header">
            <Image src="/Logo.svg" alt="SwapHub Logo" width={135} height={40} />
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-list-item">
                        <Link href="/" className={isActive("/") ? "header__link--active" : ""}>
                        Listings
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}
```
**Forklarking af kode**
Jeg bruger react hooken usePathname fra next navigation til at hente URL stien i browseren. Fordi at så ved vi hvor brugeren befinder sig. Funktionen isActive tager href som argument og retunerer derfor true eller false, afhængigt af hvor brugeren befinder sig. Derfor kan vi dynamisk beslutte os over hvilken side vises som aktiv. Derefter har jeg lavet et if statement der fortæller os at forsiden også skal ses som aktiv når man befinder sig på details login og register siden. I mit Link component bliver der tildelt en dynamisk CSS klasse. Jeg bruger så den conditional ternary operator til at tjekke om klassen er truthy eller falsy.
