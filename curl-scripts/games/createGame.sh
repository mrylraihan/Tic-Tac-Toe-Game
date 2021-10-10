#!/bin/bash

# for curls and scripting files you need to have this shabang line,
# its specfifies the type of the file, this is used instead of a file extension

# make a show request to show a sing book based on its id
# ${} is how you do string interpulation with curls Capitals in the the inside
# the request method to Post to create a book, but you need it for the other methods
curl --include --request POST "https://tic-tac-toe-api-production.herokuapp.com/games" \
    --header "Content-type: application/json" \
    --header "Authorization: Bearer ${TOKEN}" \
    # --data '{
    #     "game": {
    #       "cells": ["","","","","","","","",""],
    #       "over": false,
    #       "_id": "5e823ba98929cc4e95e2f5d9",
    #       "owner": "5e82311c8929cc4e95e2f5d8",
    #       "createdAt": "2020-03-30T18:34:17.772Z",
    #       "updatedAt": "2020-03-30T18:34:17.772Z",
    #       "__v": 0
    #     }
    #   }'

# print a new line , so the bash propmt is on its own line
echo


# how to run in terminal
# TOKEN=c34a50e90b059e4825862cfc1929c0bb  sh curl-scripts/games/createGame.sh

# How to check by located teh id of teh book created
# $ ID={bookId} sh curl-scripts/books/show.sh
