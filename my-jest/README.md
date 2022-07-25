## Jest: Node.js Test Framework

- https://www.daleseo.com/jest-basic/

    1. 프로젝트 생성

        ```powershell
        mkdir my-jest
        npm init -y
        ```
    2. Jest 라이브러리 설치(개발 의존성으로)
        
        ```powershell
        npm i -D jest
        ```

    3. package.json 수정

        ```powershell
        "scripts": {
            "test": "jest"
        },
        ```

    4. npm test로 실행

        ```powershell
        npm test
        ```
