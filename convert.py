from PIL import Image
import os

# 🔧 Ordner mit den Bildern ('.' = aktueller Ordner)
input_folder = "./images/winter"

# 🔁 Alle Dateien im Ordner durchgehen
for root, _, files in os.walk(input_folder):
    for filename in files:
        if filename.lower().endswith((".jpg", ".jpeg", ".png")):
            input_path = os.path.join(root, filename)
            output_path = os.path.splitext(input_path)[0] + ".avif"

            try:
                # Bild öffnen
                with Image.open(input_path) as img:
                    # Optional: in RGB umwandeln (wichtig bei PNG mit Transparenz)
                    if img.mode in ("RGBA", "P"):
                        img = img.convert("RGB")

                    # AVIF speichern (erfordert Pillow >= 9.1 & libavif Unterstützung)
                    img.save(output_path, format="AVIF", quality=70)
                    print(f"✅ {filename} → {os.path.basename(output_path)}")
            except Exception as e:
                print(f"⚠️ Fehler bei {filename}: {e}")

print("🎉 Alle Bilder wurden erfolgreich konvertiert!")
