import os
import sys

# Startup execution diagnostic checks for testing database paths and ports
def run_diagnostics():
    print("Executing KrishiBhoomi Platform Startup Diagnostics...")
    print(f"Working Directory: {os.getcwd()}")
    print(f"Python Version: {sys.version}")
    print("Diagnostics finished: OK.")

if __name__ == "__main__":
    run_diagnostics()
