https://www.youtube.com/watch?v=TpXNX1xkwZ8&list=PLN3n1USn4xlnfJIQBa6bBjjiECnk6zL6s&index=18

## Tips

- To create a new database with postgresql, you need to start the session as a `postgresql` use, like this: `sudo -i -u postgres` and then create it `createdb DATABASE_NAME`.

- Config password to `postgres` user with: `ALTER USER postgres WITH PASSWORD 'Your_Awesome_Password';`

- Add with [heroku](https://www.youtube.com/watch?v=qQAozc1MkdU&list=PLN3n1USn4xlnfJIQBa6bBjjiECnk6zL6s&index=15)

- Add with [Netlify](https://www.youtube.com/watch?v=FiU3SHEaFwk&list=PLN3n1USn4xlnfJIQBa6bBjjiECnk6zL6s&index=16)

## Problems:

How to check better the errors in watchman: https://github.com/facebook/create-react-app/issues/346#issuecomment-237424953

---

```
jest-haste-map: Watchman crawl failed. Retrying once with node crawler.
  Usually this happens when watchman isn't running. Create an empty `.watchmanconfig` file in your project's root folder or initialize a git or hg repository in your project.
```

**Solution:** https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers

---

```
Callback with id 0: undefined.undefined() not found from android phone.
```

**Solution:** https://stackoverflow.com/questions/56498167/expo-33-yarn-workspaces-callback-with-id-0-undefined-undefined-not-found
