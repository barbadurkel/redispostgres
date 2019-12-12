# redis-postgres-node-java

# Set the "vm-driver" option to NONE, when you install and run minikube inside a virtual machine
"sudo minikube start --vm-driver=none"



--- Installation Minikube:

 curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/
  export MINIKUBE_WANTUPDATENOTIFICATION=false
  export MINIKUBE_WANTREPORTERRORPROMPT=false
  export MINIKUBE_HOME=$HOME
  export CHANGE_MINIKUBE_NONE_USER=true
  export KUBECONFIG=$HOME/.kube/config
  sudo minikube start --vm-driver none

  ____________________________________

sudo mv /root/.kube /root/.minikube $HOME
sudo chown -R $USER $HOME/.kube $HOME/.minikube


dans $HOME/.kube/config ajouter les nouveaux paths:
au lieu de "/root/" mettre "/home/sogeti"

---------