@echo off
title Serve for QuickDictionary app

SET pathToRepository="D:\Documents\Andersen\Angular5\QuickDictionary"

start "" http://localhost:4200

set pathToWeb=%pathToRepository%\quick-dictionary-web
cd /d %pathToWeb%
call ng serve

pause