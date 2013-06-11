rm -rf ../cbf-cleanDeploy
mkdir ../cbf-cleanDeploy
demeteorizer -o ../cbf-cleanDeploy -n 0.8.18
cd ../cbf-cleanDeploy
modulus deploy -p cbf-clean
cd ../cbf-clean
