# Run the sign-in script first
#  EMAIL=w@example.com PASSWORD=b sh curl-scripts/auth/sign-in.sh

# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh
# TOKEN=3ace45af372ff0b0c9fe57d6f10b53e7 OLD_PW=r NEW_PW=w sh curl-scripts/auth/change-password.sh

curl "https://tic-tac-toe-api-production.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "passwords":{
      "old" : "'"${OLD_PW}"'",
      "new" : "'"${NEW_PW}"'"
    }
  }'

echo
