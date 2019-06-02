## Tips to clean it

```
# Restart watchman
echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
watchman shutdown-server
watchman watch-del-all

# Then remove all the node_modules from the packages

# Then clean cache
yarn cache clean

# Then install everything
yarn install
```
