FROM node:lts-alpine

# 앱 디렉터리
WORKDIR /usr/src/app

# 패키지*.json 파일들을 앱 디렉터리에 복사 & 설치 
COPY package*.json ./
RUN npm install

# 앱 소스 복사
COPY . .

# 포트 오픈
EXPOSE 3000

CMD ["npm", "start"]
