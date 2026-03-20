from bs4 import BeautifulSoup

# 파일 경로 설정
reference_file = "reference_converted.html"
index_file = "index_converted.html"
output_file = "index_converted_updated.html"

# reference_converted.html에서 스타일 추출
with open(reference_file, "r", encoding="utf-8") as ref_file:
    ref_soup = BeautifulSoup(ref_file, "html.parser")
    ref_styles = ref_soup.find("style")

# index_converted.html에 스타일 추가
with open(index_file, "r", encoding="utf-8") as idx_file:
    idx_soup = BeautifulSoup(idx_file, "html.parser")
    if ref_styles:
        # 기존 스타일 태그가 있으면 병합
        existing_styles = idx_soup.find("style")
        if existing_styles:
            existing_styles.append(ref_styles.string)
        else:
            # 스타일 태그가 없으면 새로 추가
            idx_soup.head.append(ref_styles)

# 결과를 새로운 파일로 저장
with open(output_file, "w", encoding="utf-8") as out_file:
    out_file.write(str(idx_soup))

print(f"Updated file saved to {output_file}")