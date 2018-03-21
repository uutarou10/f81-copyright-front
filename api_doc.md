baseURL : /api
# User
## POST `/users/sign_in`
サインイン

request
```json
{
  email: '',
  password: ''
}
```

## DELETE `/users/sign_out`
サインアウト

## POST `/users`
ユーザー登録

```json
{
  "email": '',
  "password": '',
  "password_confirmation": ''
}
```

# Photo
## POST `/posts`
写真の投稿

`multipart/form-data`使って写真を送る
`post[photo]`で写真送る
`post[title]`でタイトル送る

response
```json
{
  "id": 1,
  "status": "ok ng"
}
```

## GET `/posts/:id`
写真詳細

```json
{
  "url": "/images/01",
  "title": "hoge",
  "timestamp": "format忘れた"
}
```