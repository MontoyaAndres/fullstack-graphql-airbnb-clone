echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
watchman shutdown-server
watchman watch-del-all
rm -r node_modules/
pwd
rm -r ../../node_modules
yarn cache clean
cd ../../
pwd
yarn

