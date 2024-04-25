#!/bin/bash

# Loop through all .mov files in the current directory
for file in *.mov; do
    # Extract the filename without its extension
    filename="${file%.*}"

    # Create a palette for better quality GIF
    ffmpeg -i "$file" -vf "fps=10,scale=320:-1:flags=lanczos,palettegen" "${filename}_palette.png"

    # Convert MOV to GIF using the generated palette
    ffmpeg -i "$file" -i "${filename}_palette.png" -filter_complex "fps=10,scale=320:-1:flags=lanczos[x];[x][1:v]paletteuse" "${filename}.gif"

    # Optional: Remove the palette image to clean up
    rm "${filename}_palette.png"
done

echo "Conversion complete."


# ffmpeg -i slides_demo.mov -vf "fps=10,scale=320:-1:flags=lanczos,palettegen" palette.png
# ffmpeg -i slides_demo.mov -i palette.png -filter_complex "fps=10,scale=320:-1:flags=lanczos[x];[x][1:v]paletteuse" slides_demo.gif

# ffmpeg -i slides_demo.mov -vf "fps=10,scale=iw:-1:flags=lanczos,palettegen" palette.png
# ffmpeg -i slides_demo.mov -i palette.png -filter_complex "fps=10,scale=iw:-1:flags=lanczos[x];[x][1:v]paletteuse" slides_demo.gif
