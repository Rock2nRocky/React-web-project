import os

# Define the directories
directories = [
    r"E:\P24 - Copy\cloth-shop\public",
    r"E:\P24 - Copy\cloth-shop\src"
]

# Output file
output_file = r"E:\P24 - Copy\cloth-shop\project_structure_and_content.txt"

# Open the output file in write mode
with open(output_file, "w", encoding="utf-8") as f_out:
    for directory in directories:
        for root, dirs, files in os.walk(directory):
            # Get relative folder path
            relative_path = os.path.relpath(root, start=os.path.dirname(directory))
            folder_name = os.path.basename(root)
            if relative_path == ".":
                relative_path = folder_name
            
            # Write the folder name
            f_out.write(f"{relative_path} Folder\n")
            
            # Write each file name and its content
            for file in files:
                file_path = os.path.join(root, file)
                f_out.write(f"    {file}\n")
                
                # Add file content
                try:
                    with open(file_path, "r", encoding="utf-8") as f_in:
                        f_out.write("        [Content Start]\n")
                        f_out.write(f_in.read())
                        f_out.write("\n        [Content End]\n\n")
                except Exception as e:
                    f_out.write(f"        [Error Reading File: {e}]\n\n")
            
            # Add spacing for readability
            f_out.write("\n")

print(f"Directory structure and file contents saved to: {output_file}")
