FROM node:18

# 앱 디렉토리 생성
WORKDIR /app

# 앱 종속성 설치
COPY package*.json ./
RUN npm install

# 소스 코드 복사
COPY . .

# 앱 빌드
RUN npm run build

# 포트 열기
EXPOSE 4173

# 앱 실행
CMD ["npm", "run", "preview"]
