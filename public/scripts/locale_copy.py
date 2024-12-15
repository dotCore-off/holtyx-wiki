import os
import shutil

def add_suffix_to_files(folder_path, suffix=".fr-FR"):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            file_name, file_ext = os.path.splitext(file)

            # Process only files with .en-EN in their name
            if ".en-US" in file_name:
                # Construct the new file name with the suffix
                new_file_name = file_name.replace(".en-US", suffix) + file_ext
                new_file_path = os.path.join(root, new_file_name)

                # Check if the new file already exists
                if not os.path.exists(new_file_path):
                    # Copy the original file to the new file name
                    shutil.copy(file_path, new_file_path)
                    print(f"Created: {new_file_path}")
                else:
                    print(f"File already exists: {new_file_path}")

# IMPORTANT: put the path to the wiki pages directory
folder_to_process = ""
add_suffix_to_files(folder_to_process, ".fr-FR")
add_suffix_to_files(folder_to_process, ".de-DE")