# redis-postgres-node-java


**Minikube Installation Process :** 



 1. curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/

 2. export MINIKUBE_WANTUPDATENOTIFICATION=false
    export MINIKUBE_WANTREPORTERRORPROMPT=false
    export MINIKUBE_HOME=$HOME
    export CHANGE_MINIKUBE_NONE_USER=true
    export KUBECONFIG=$HOME/.kube/config

3.  *Always set the "vm-driver" option to NONE, when you install and run minikube inside a virtual machine*
    sudo minikube start --vm-driver none

 


    Now, add the new path to :  **$HOME/.kube/config** 
    instead of de "/root/" use **$HOME**

1.  sudo mv /root/.kube /root/.minikube $HOME
    sudo chown -R $USER $HOME/.kube $HOME/.minikube



## TODO : 
- Dockertize the app (Docker compose problems!)
- Redis/ Postgres load testing (JMeter)
- Scalability verification
  