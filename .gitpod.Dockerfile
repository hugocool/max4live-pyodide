FROM gitpod/workspace-python-3.9:latest

ENV PIP_USER=false
RUN sudo apt-get -y update && sudo apt-get install -y graphviz libgraphviz-dev pkg-config --fix-missing
RUN sudo apt-get install nodejs
 
RUN python -m ensurepip
RUN python -m pip install --upgrade pip poetry

