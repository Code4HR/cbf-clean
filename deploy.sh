rm -rf ../cbf-cleanDeploy
mkdir ../cbf-cleanDeploy
demeteorizer -o ../cbf-cleanDeploy -n 0.8.15
cd ../cbf-cleanDeploy
patch < ../cbf-clean/extras.patch
modulus deploy
