openssl req -nodes -new -x509 \
  -keyout server.key \
  -out server.cert \
  -subj "/"

echo
echo
echo "Certifications created at /server.cert and /server.key"