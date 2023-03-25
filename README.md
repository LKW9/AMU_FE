# [항해99] 3. 실전 프로젝트 계획표

<aside>
💡 항해 99 미니 프로젝트 D반 1조 팀원들의
실전 프로젝트 코딩 에 대한 내용을 기입하는 S.A. 페이지 입니다.

</aside>

## 0. 목차

**1. 프로젝트 명**

**2. 팀원**

**3. 소개**

**4. 와이어프레임**

**5.프로그램 세팅 및 작업**

**6. API**

**7. 기능구현 분담**

**8. 서버와 데이터베이스의 관계도**

---

## 프로젝트 명

<aside>
💁🏻‍♂️ AMU WIKI (아무 위키)

</aside>

## 팀원

<aside>
💁🏻‍♂️ 팀원 목록표


![화면 캡처 2023-03-18 215303](https://user-images.githubusercontent.com/117289578/226107207-d9e1d31d-ff6d-4c8b-8cec-b86b57883213.png)


</aside>

## 소개

<aside>
💁🏻‍♂️ elasticSearch 를 사용한 NoSQL 기반의 데이터 검색과 
서버 이중화와 보안까지 고려해 설계하여 만든 위키백과의 한 종류 입니다.
그리고, 기존 위키백과 사이트와의 차별점을 둔 부분은 
새로운 위백과 데이터를 import 할 수 있도록 하였습니다.

</aside>

## 와이어프레임

[Amuwiki_와이어프레임_수정본_230317.pdf](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b1f6ae2f-33f0-4812-a540-c2e29691790e/Amuwiki_%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84_%EC%88%98%EC%A0%95%EB%B3%B8_230317.pdf)


---

## 프로그램 세팅 및 작업

<aside>
🛠 프로그램 세팅 및 작업

- **GitHub Link**
    
    BE: [https://github.com/LKW9/AMU_BE/tree/develop](https://github.com/LKW9/AMU_BE/tree/develop)
    
    FE: [https://github.com/LKW9/AMU_FE/tree/develop](https://github.com/LKW9/AMU_FE/tree/develop)
    

- **Stack**
    
    
    <aside>
🔗 FrontEnd_Stack


![image](https://user-images.githubusercontent.com/92284361/227667321-e70c40a4-3696-479c-8e80-ede70f874685.png)
    

- **ERD**
    
![mongoDB hackolade](https://user-images.githubusercontent.com/117289578/226113241-62171e24-f7a9-49ca-b573-0e9e8fd4d8ff.png)


- **npm**
    
   "FrontEnd"

"@emotion/react": "^11.10.6",
"@emotion/styled": "^11.10.6",
"@headlessui/react": "^1.7.13",
"flowbite": "^1.6.4",
"flowbite-react": "^0.4.2",
"react": "^18.2.0",
"react-cookie": "^4.1.1",
"react-dom": "^18.2.0",
"react-router-dom": "^6.9.0"
    

- **Code Review Time**
    - 아침조회 (오전 09시)
        
        전일 19시부터 금일 08시까지 구현한 코드 및 기능 전달,
        19시전까지 어떤걸 할건지 전달.
        
    - 중간조회 (오후 04시)
        
        중간 코드리뷰 실행
        
    - 일일결산 (오후 07시)
        
        아침조회부터 19시까지 작성한 코드 및 기능구현 전달,
        20시 혹은 21시 쯤에 있는 매니저 순회 전까지 질문할 질문내용을 정리.
        

</aside>

## API

<aside>

📃 API 표

![화면 캡처 2023-03-23 162840](https://user-images.githubusercontent.com/117289578/227133318-d195ef6a-fdbd-4be9-848b-9c801b3b4a2a.png)

</aside>

## **기능구현 분담**

<aside>
🙋🏻‍♂️  Dividing the implementation of Infrastructure features.

- 이기웅
    - CI / CD
        
        GitHub Action
        
    - AWS

- 정붕기
    - Virtualization Technology
        
        Docker
        
    - ElasticSearch
    
    - AWS
    
- 주재훈
    - MongoDB manager
        
    - AWS
        
- 한창윤
    - Virtualization Technology
        
        Docker
        
    - ElasticSearch
    
    - AWS
    
- 조현수
    - Virtualization Technology
        
        Docker
        
    - Deployment
        
        EC2
        
    - AWS
        
        
</aside>

<aside>
🙋🏻‍♂️ Dividing the implementation of Server features.

- 이기웅
   1. View user profile
   2. Edit user profile - nickname, password
   3. Upload profile photo
   4. Edit profile photo
    
- 조현수
   1. Retrieve a post
   2. Create a post
   3. Edit a post
   4. Delete a post
- 주재훈
   1. Send email verification code
   2. Verify email address
   3. User signup
   4. User login
   5. User logout
   6. User withdrawal
    
- 정붕기
    1. Elasticsearch
    
- 한창윤
    1. Elasticsearch
    
</aside>


## Architecture

![Lv1](https://user-images.githubusercontent.com/117289578/227130486-711e9829-f50f-45bd-a1ff-7dd39d2be208.png)



---
