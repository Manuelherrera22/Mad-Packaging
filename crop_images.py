import os
from PIL import Image

def process_images(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".jpg") or filename.endswith(".png"):
            if filename == "mad.png": # skip logo
                continue
            filepath = os.path.join(directory, filename)
            try:
                img = Image.open(filepath)
                # Ensure it's in a modifiable mode
                if img.mode != 'RGB':
                    img = img.convert('RGB')
                
                width, height = img.size
                
                # The green header and logo are typically in the top 20%
                # The bottom often has some white space or a footer
                # Let's crop the top 25% and bottom 15%. This keeps the middle 60%.
                # For a 1000x1000 image, this crops y from 250 to 850.
                
                top_crop = int(height * 0.22)
                bottom_crop = int(height * 0.05)
                
                # left, upper, right, lower
                cropped_img = img.crop((0, top_crop, width, height - bottom_crop))
                
                cropped_img.save(filepath)
                print(f"Processed {filename}: original {width}x{height}, new {cropped_img.size}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    target_dir = r"c:\Users\Corvus\Desktop\Mad\packaging-industrial\public\img\scraped"
    process_images(target_dir)
    print("Done processing images.")
