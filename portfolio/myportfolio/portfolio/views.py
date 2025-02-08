# portfolio/views.py
from rest_framework import viewsets
from .models import Project, Contact
from .serializers import ProjectSerializer, ContactSerializer
from rest_framework.response import Response
from rest_framework.decorators import action

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    @action(detail=False, methods=['post'])
    def send_message(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "Message sent successfully!"})
        print("Message sent successfully!")
        return Response(serializer.errors, status=400)
