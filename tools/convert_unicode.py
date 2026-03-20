import re

# filepath: /Users/kangnam/projects/kangnam7654.github.io/convert_unicode.py
def convert_unicode_to_text(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # 정규식을 사용하여 유니코드 패턴을 찾고 변환
    converted_content = re.sub(r'&#(\d+);', lambda x: chr(int(x.group(1))), content)

    save_path = file_path.replace('.html', '_converted.html')
    with open(save_path, 'w', encoding='utf-8') as file:
        file.write(converted_content)

    print(f"유니코드 변환 완료: {file_path}")

# HTML 파일 경로
html_file_path = 'reference.html'

# 변환 실행
convert_unicode_to_text(html_file_path)