import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World.{" "}  
      Hallo, wir testen hier dinge.

        <form class="form" method="post">
    <h1>Registrierung</h1>

    <div class="field">
        <select name="anrede" required>
            <option value="" disabled selected>Anrede</option>
            <option value="m">Herr</option>
            <option value="w">Frau</option>
            <option value="d">Divers</option>
        </select>
    </div>

    <div class="field">
        <input type="text" name="vorname" placeholder="Vorname" required>
    </div>

    <div class="field">
        <input type="text" name="nachname" placeholder="Nachname" required>
    </div>

    <div class="field">
        <input type="email" name="email" placeholder="E-Mail" required>
    </div>

    <div class="field">
        <input type="date" name="geburtstag" required>
    </div>

    <input type="submit" name="sub" value="Abschicken">
</form>
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
