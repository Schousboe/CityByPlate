#!/usr/bin/env python3
import argparse
import json
from pathlib import Path


def parse_lines(text: str):
    results = {}

    for raw in text.splitlines():
        line = raw.strip()
        if not line:
            continue

        if " - " not in line:
            continue

        code, rest = line.split(" - ", 1)

        if ", " in rest:
            city = rest.split(", ", 1)[0]
        else:
            city = rest

        code = code.strip()
        city = city.strip()

        if code and city:
            results[code] = city

    return results


def main():
    parser = argparse.ArgumentParser(
        description="Convert structured text into JSON (code: city)."
    )
    parser.add_argument("input", help="Input .txt file")
    parser.add_argument("--out", help="Optional output .json file path")

    args = parser.parse_args()

    in_path = Path(args.input).expanduser().resolve()

    if not in_path.exists() or not in_path.is_file():
        raise FileNotFoundError(f"Input file not found: {in_path}")

    text = in_path.read_text(encoding="utf-8")

    parsed = parse_lines(text)

    if args.out:
        out_path = Path(args.out).expanduser().resolve()
    else:
        out_path = in_path.with_suffix(".json")

    out_path.write_text(
        json.dumps(parsed, indent=2, ensure_ascii=False),
        encoding="utf-8"
    )

    print(f"Saved: {out_path}")


if __name__ == "__main__":
    main()
